const Order = require('../models/Order');
const router = require('express').Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('./verfityToken');

// CREATE
router.post('/', verifyToken ,async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedCart = await newOrder.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {

    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE ORDER
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('Order has been deleted');
    } catch (err) {
        res.status(500).json(err);
   }
});

// GET USER ORDERS
router.get('/find/:userId', verifyTokenAndAdmin,async (req, res) => {
    try {
        const orders = await Order.find({userId:req.params.userId});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
   }
});

// GET ALL PRODUCTS
router.get('/', verifyTokenAndAdmin ,async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch(err){
        res.status(500).json(err);
    }
});


// GET MONTHLY INCOME

router.get('/income', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    previousMonth.setFullYear(lastMonth.getFullYear());
    
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: '$createdAt' },
                    sales: '$amount',
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: '$sales' },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
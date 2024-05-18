import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
  {

    productId: {
      type: String,
      required: true,
      ref: 'product'

    },
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalSales: Number,
        totalUnits: Number,
        id: Number
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

export  const OverallStat = mongoose.model("OverallStat", OverallStatSchema);

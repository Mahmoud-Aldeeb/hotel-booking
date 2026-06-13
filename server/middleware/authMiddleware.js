// import User from "../models/User.js";

// export const protect = async (req, res, next) => {
//   const { userId } = req.auth;
//   if (!userId) {
//     res.json({ success: false, message: "not authenticated" });
//   } else {
//     const user = await User.findById(userId);
//     req.user = user;
//     next();
//   }
// };

import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const { userId } = req.auth();
    console.log("Auth middleware - userId from Clerk:", userId);

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "not authenticated" });
    }

    // ابحث عن المستخدم في MongoDB باستخدام الـ _id اللي هو نفس Clerk ID
    const user = await User.findById(userId);
    console.log("User found in DB:", user ? "Yes" : "No");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found in database" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

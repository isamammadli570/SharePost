const AuthSchema = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  console.log("register basladi");
  try {
    const { username, email, password } = req.body;

    const user = await AuthSchema.findOne({ email });

    if (user) {
      return res.status(409).json({ message: "Belə bir istifadəçi vardır" });
    } // eger o email ile qeydiyyatdan kecibse yene kece bilmez

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Şifrə 6 simvoldan böyük olmalıdır" });
    } // 6dan asagidirsa olmaz

    const hashedPassword = await bcrypt.hash(password, 12); // hash etdik

    if (!isEmail(email)) {
      return res.status(400).json({ message: "Email formatı düzgün deyil!" });
    }

    // email yazanda ferqli isareler olmaz

    const newUser = await AuthSchema.create({
      username,
      email,
      password: hashedPassword,
    });
    // ve bizim yeni userimiz hazirdir

    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    }); // token yaratdiq

    res.status(201).json({
      status: "OK",
      newUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await AuthSchema.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "Bele bir istifadeci yoxdur" });
    } // email ile qeydiyat etmeyibse xeta versin

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(500).json({ message: "Girilen sifre yanlisdir" });
    } // yaradilan sifre ile indi girdiyi sifre eyni olmalidir

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "OK",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// bu hemin email isareleri funksiyasidir
function isEmail(emailAdress) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailAdress.match(regex)) return true;
  else return false;
}

module.exports = { register, login };

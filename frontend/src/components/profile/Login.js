import React from 'react';
import GoogleAuth from "./components/auth/GoogleAuth";
import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";

router.post("/login", passport.authenticate("local"), (req, res, next) => {
    const { user } = req;
    jwt.sign({ user }, "secretkey", { expiresIn: "30min" }, (err, token) => {
        res.status(200).json({ ...user._doc, token });
    });
});

function Login(props) {
    return (
        <div>
            <Route
                exact
                path="/sign-up"
                render={(props) => <SignUp {...props} setUser={setUser} />}
            />
            <Route
                exact
                path="/log-in"
                render={(props) => <LogIn {...props} setUser={setUser} />}
            />
            <div id="google-auth">
                {!user && <GoogleAuth setUser={setUser} class="googleAuth" />}
                {!user && <GoogleAuthLogin setUser={setUser} class="googleAuth" />}
            </div>
        </div>
    );
}

export default Login;


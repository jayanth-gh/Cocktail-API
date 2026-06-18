const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require("../models/auth")

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "mykeypswrd"
}

passport.use(
    new JwtStrategy(options,async (payload,done)=>{
        try{
            const user = await User.findById(payload.id)

            if(user){
                return done(null,user)
            }

            return done(null,false)
        }
        catch(err){
            return done(null,false)
        }
    }
    )
)

module.exports = passport
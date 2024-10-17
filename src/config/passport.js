
import { ExtractJwt } from 'passport-jwt'
import passport from 'passport'
import JwtStrategy from 'passport-jwt/lib/strategy'

let options = {}

options.jwtFromReq = ExtractJwt.fromAuthHeaderAsBearerToken()
options.jwtSecret = "secret"

passport.use(new JwtStrategy())
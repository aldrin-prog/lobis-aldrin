import { describe, it } from "mocha";
import request from 'supertest'
import app from "./test-server.js";
import { expect } from "chai";
describe("User Creation",()=>{
    it("should add new user",(done)=>{
        request(app).post('/api/auth/register').expect(201).send(
            {firstName:"John",
              lastName:"Doe",
              email:"johndoe@email.com",
              password:"admin123"
            }).end((err,res)=>{
            if(err) return done(err);
            expect(res.status).to.equal(201);
            done();
        })
    })
    it("should login the user",(done)=>{
        request(app).post("/api/auth/login")
        .expect(200)
        .send({email:"johndoe@email.com",password:"admin123"})
        .end((err,res)=>{
            if(err)
                return done(err);
            expect(res.status).to.equal(200)
            done();
        })
    })
})
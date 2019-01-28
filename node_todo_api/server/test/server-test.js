const request = require('supertest');
const expect = require('expect');
const objectId = require('mongodb').ObjectID;

const Todo = require('./../models/todo.js').Todo;
const app = require('./../server').app;

var todos = [{
    _id: new objectId(),
    text: 'This is the first'
},
{
    _id : new objectId(),
    text: 'This is the second'
}]

beforeEach((done) => {
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos);
    }).then(()=> done());
});

describe('POST/todos ', () => {
    it('Should create a new todo', (done) => {
        var text = 'Test todo';
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(3);
                    expect(todos[2].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            })
    });

    it('When invalid body is passed', (done)=>{
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err,res)=>{
                if(err){
                    return done(err);
                }
                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e)=> done(e));
            })
    });

});

describe('GET/Todos', ()=>{
    it('should return 2 values from Todo', (done)=>{
        request(app)
            .get('/todos')
            .expect(200)      
            .end((err,res)=>{
                expect(res.body.length).toBe(2);
                done();
            });
    });
});

describe('GET/Todos/:id', ()=>{
    it('should return todo doc', (done)=>{
        // console.log(`/todos/${todo[0]._id}`) ;
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(todos[0].text);
            })
            .end(done);       
    });

    it('should return 404 if todo not found', (done)=>{
        request(app)
            .get(`/todos/${new objectId}`)
            .expect(404)
            .end(done);
    });

    it('should return 404 for non-object id', (done)=>{
        request(app)
            .get(`/todos/123`)
            .expect(404)
            .end(done);
    });
})
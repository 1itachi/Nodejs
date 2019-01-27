const request = require('supertest');
const expect = require('expect');

const Todo = require('./../models/todo.js').Todo;
const app = require('./../server').app;

var todos = [{
    text: 'This is the first'
},
{
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
                console.log(res.body);
                expect(res.body.length).toBe(2);
                done();
            });
    });
});
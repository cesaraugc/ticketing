import request from 'supertest';
import { app } from '../../app';

const getSessionValue = (setCookie: string) => {
    let firstKey = setCookie.split(';')[0];
    let sessionValue = firstKey.split('session=')[1];
    return sessionValue;
};


it('clears the cookie after signing out', async () => {
    let response = await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(201);

    let cookieValue = getSessionValue(response.get('Set-Cookie')[0]);
    expect(cookieValue.length).toBeGreaterThan(0);

    response = await request(app)
        .post('/api/users/signout')
        .send({})
        .expect(200);

    cookieValue = getSessionValue(response.get('Set-Cookie')[0]);
    expect(cookieValue.length).toBe(0);
});
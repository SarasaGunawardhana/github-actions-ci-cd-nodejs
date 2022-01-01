
const request = require("supertest");

const app = require("../server");

describe("Route > Users", () => {
  describe("GET: /api/users/", () => {
    it("Retrieved users", async () => {
      return await request(app).get("/api/users/?api-key=martel").expect(200);
    });
  });
});

describe("Route > Repos", () => {
  describe("GET: /api/repos/", () => {
    it("Retrieved users", async () => {
      return await request(app).get("/api/repos/?api-key=martel").expect(200);
    });
  });
});


// describe('Sample Test for APIs', () => {
//     it('should test that true === true', () => {
//       expect(true).toBe(true)
//     })
// })

// describe("Test root api", () => {
//   test("GET /", (done) => {
//     request(app)
//       .get("/")
//       .expect(200)
//       // More logic goes here
//   });
//   // More things come here
// });

// describe("Test example", () => {
//     test("GET /api/users", (done) => {
//       request(app)
//         .get("/api/users/?api-key=martel")
//         .expect(200)
//         // More logic goes here
//     });
//     // More things come here
// })
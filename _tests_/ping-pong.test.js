import { pingPong } from './../src/ping-pong.js';

describe('pingPong', () => {
  test("should correctly beepboop a number", () => {
    var pingPonged = pingPong(5);
    expect(pingPonged[0]).toEqual(1);
  })
    test ("this will check to make sure my ping is ponging on and my pongs are pinging", () => {
      var iExist = pingPong(10);
      expect(iExist[2]).toEqual("ping");
    })
})

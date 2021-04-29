
import gju from "geojson-utils";

//const {gameArea, players} = require("./gameData");
import { gameArea, players } from "./gameData";

export const resolvers = {
  Query: {
    gameArea: () => {
      return gameArea;
    },
    isUserInArea: (_: any, { longitude, latitude }: { latitude: number, longitude: number }) => {
      const point = { type: "Point", coordinates: [longitude, latitude] }
      const isInside = gju.pointInPolygon(point, gameArea)
      let result: any = {};
      result.status = isInside;
      result.msg = isInside ? "Point was inside the GameArea" : "Point was NOT inside the GameArea";
      return result
    },
    findNearbyPlayers: (_: any, { longitude, latitude, distance }: { latitude: number, longitude: number, distance: number }) => {
      const center = { type: "Point", coordinates: [longitude, latitude] }
      const results: any = [];
      players.map(p => {
        const point = p.geometry
        if (gju.geometryWithinRadius(point, center, distance)) {
          if (JSON.stringify(point.coordinates) !== JSON.stringify(center.coordinates)) {
            results.push({ name: p.properties.name, point: { coordinates: p.geometry.coordinates } })
          }
        }
      })
      return results;
    },
    distanceToUser: (_: any, { longitude, latitude, userName }: { latitude: number, longitude: number, userName: string }) => {
      const me = { type: "Point", coordinates: [longitude, latitude] }
      const user: any = players.find(user => user.properties.name === userName);
      if(user){
        const point = user.geometry
        const distance = gju.pointDistance(me, point)
        return { distance: distance, to: user.properties.name };
      }
      
      //TODO: Ask Lars
      return { msg: "Player not found.", statuscode: 404 };

    }
  },
};

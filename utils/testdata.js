// Create Test Data

const mongoose = require("mongoose");
const User = require("../models").User;
const Pin = require("../models").Pin;
const randombytes = require("randombytes");

// Functions
function createTestPins(testUserIds, testPinIds, testUserLinks, extraPinIds) {
  let pins = [];
  let links = ["https://wallhaven.cc/w/d5zo2o",
  "https://wallhaven.cc/w/o3d2p7",
  "https://wallhaven.cc/w/r7wgjq",
  "https://wallhaven.cc/w/4gm67e",
  "https://wallhaven.cc/w/57yv75",
  "https://wallhaven.cc/w/4omwy7",
  "https://wallhaven.cc/w/nkdzxm",
  "https://wallhaven.cc/w/lqgjxp",
  "https://wallhaven.cc/w/wyz96p",
  "https://wallhaven.cc/w/odlr3p"
  ];
  let titles = ["Commodore 64 Computer",
  "Windows 95 Computer",
  "Light",
  "Wembley Stadium",
  "The Beatles",
  "Spectrum",
  "Fibonacci Sequence",
  "Plasma",
  "Women in Business Suit",
  "Christmas Time"
  ];

  // Apply Loop
  for (let i=0,t=0;i<links.length;i++) {
    let owner = `test${i+1}`;
    let ownerid = testUserIds[i];
    let ownerlink = testUserLinks[i];
    let _id = testPinIds[i];
    if (i >= 5) {
      owner = "test1";
      ownerid = testUserIds[0];
      ownerlink = testUserLinks[0];
      _id = extraPinIds[t];
      t++;
    }
    pins.push({
      _id,
      owner,
      ownerid,
      ownerlink,
      title: titles[i],
      link: links[i]
    });
  }
  return pins;
}

function createTestUsers(testUserIds, testPinIds, testUserLinks) {
  let users = [];
  // Apply Loop
  for (let i=0;i<testUserIds.length;i++) {
    users.push({
      _id: testUserIds[i],
      username: `test${i+1}`,
      password: "12345",
      link: testUserLinks[i],
      imagelinks: [testPinIds[i]]
    });
  }
  return users;
}
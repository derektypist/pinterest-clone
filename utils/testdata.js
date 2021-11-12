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
  let titles = ["Commodore 64",
  "Windows 95",
  "Light",
  "Wembley Stadium",
  "The Beatles",
  "Spectrum",
  "Fibonacci Sequence",
  "Plasma",
  "Business Suit",
  "Christmas"
  ];
}
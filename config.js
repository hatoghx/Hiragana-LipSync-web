"use strict";

const PARTS = 4;

window.MODEL_SOURCES = Array.from({ length: PARTS }, (_, i) =>
  "model/model.onnx.part" + (i + 1)
);

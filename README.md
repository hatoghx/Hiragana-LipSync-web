# Hiragana LipSync for web

> [!WARNING]
> Development and support for the web version of this tool have ended.

A browser-based tool that generates lip-sync motion (.vmd) automatically from an audio file. No server required; all processing runs locally in the browser.

Demo: https://ghx86l.github.io/Hiragana-LipSync-web/
<br>* Processing may take some time.
<br>* Opening this site multiple times may cause loading issues.
<img width="737" height="849" alt="image" src="https://github.com/user-attachments/assets/e1f1f1b9-2f49-4651-a42b-a3e3de0b9bd6" />


## Features

- Recognizes Japanese hiragana phonemes from audio and generates mouth-shape motion (a/i/u/e/o/n)
- Optional automatic blink and breathing animation for the eyes
- WebGPU support with automatic fallback to WASM
- UI available in Japanese / Chinese / English
- Model inference runs entirely in the browser; audio is never sent to a server


## Usage

1. Open the Demo page above.
2. Drop a .wav/.mp3 file, or click to select one.
3. Click the "Audio to Vmd" button.
4. The generated VMD file downloads automatically.

## Advanced Settings


| Setting | Description |
|---|---|
| Mouth Openness | Per-vowel morph scale adjustment |
| Timing Offset | Shift output frames earlier/later |
| Max Shape Types per Frame | Maximum number of morphs active at once |
| Output FPS | 10 / 15 / 30 |
| Eye Animation | Add looping eye motion |


## License

| Name | License | File |
|---|---|---|
| Hiragana LipSync for web | MIT | `LICENSE` |
| WavLM | MIT | `licenses/LICENSE_WavLM.txt` |
| wavlm-base-plus-hiragana-ctc-v2 | CC BY-SA 3.0 | `licenses/LICENSE_WavLMHiraganaCTC.txt` |
| ONNX Runtime Web | MIT | `licenses/LICENSE_ONNXRuntimeWeb.txt` |

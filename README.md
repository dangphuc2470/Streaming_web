# Simple Streaming Website

Welcome to our simple streaming website project! This project leverages the power of Nginx for media streaming, including support for HLS (HTTP Live Streaming), RTMP (Real-Time Messaging Protocol), and integration with popular platforms like Facebook and YouTube. We also utilize Ngrok to expose our local server to the internet, making it easier to share our streams with a wider audience.

## Features

- **Live Streaming**: Broadcast live video streams using RTMP, directly from your computer.
- **Video on Demand (VOD)**: Host and stream pre-recorded video content using HLS for a seamless viewing experience.
- **Social Media Integration**: Stream directly to Facebook and YouTube, expanding your audience reach.
- **Secure and Accessible**: With Ngrok, securely expose your local streaming server to the internet.

## Screenshot
![Screenshot](/screenshot.png)

## Getting Started

### Prerequisites

- **Nginx**: Install Nginx with RTMP module support.
- **Ngrok**: Sign up and install Ngrok to expose your local server.
- **FFmpeg**: For encoding and converting video streams.

### Installation

1. **Set Up Nginx for Streaming**:
   - Install Nginx and compile with the RTMP module.
   - Configure Nginx for RTMP and HLS streaming.

2. **Configure Ngrok**:
   - Start Ngrok and point it to your Nginx server's streaming port.

3. **Stream to Social Media** (Optional):
   - Set up your Facebook and YouTube accounts for live streaming.
   - Use FFmpeg to push streams to these platforms.

## Usage

- **Start Streaming**: Use OBS or any RTMP-capable software to push your live stream to Nginx.
- **Accessing Streams**: Connect to your Ngrok URL to view live streams or VOD content.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to improve the project.

## License

This project is open source and available under the [MIT License](LICENSE.md).
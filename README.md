# Smoking Tracker Telegram App

## Overview

The Smoking Tracker Telegram App is a React-based application designed to help users track their vaping habits. It incentivizes users to reduce their consumption by rewarding them with crypto tokens for achieving milestones. The app integrates seamlessly with Telegram for user convenience.

## Features

- **Vape Tracking**: Log daily vaping habits through the app.
- **Crypto Rewards**: Earn tokens for meeting reduction goals.
- **Telegram Integration**: Connect and interact with the app through a Telegram bot.
- **User-Friendly UI**: Built using ReactJS for a seamless experience.

## Project Setup

### Prerequisites

- Node.js (version 16 or later recommended)
- npm or yarn
- Telegram bot token (you can create one using [BotFather](https://core.telegram.org/bots#botfather))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tahirahmadin/smokingtracker-telegram-app.git
   cd smokingtracker-telegram-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root of the project and add the following:

   ```env
   REACT_APP_TELEGRAM_BOT_TOKEN=your-telegram-bot-token
   REACT_APP_API_URL=your-backend-api-url
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. Open the app in your browser.
2. Link your Telegram account with the app.
3. Log your daily vaping habits and track your progress.
4. Earn crypto rewards for meeting milestones and reducing consumption.

## Project Structure

```
smokingtracker-telegram-app/
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/             # Main pages of the app
│   ├── services/          # API and Telegram integration
│   ├── utils/             # Utility functions
│   ├── App.js             # Main application file
│   └── index.js           # Entry point
├── public/                # Static files
├── .env                   # Environment variables
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## Dependencies

- React
- Axios (for API calls)
- Telegram API integration
- dotenv (for managing environment variables)

## Future Enhancements

- Advanced analytics for habit tracking
- Support for other types of smoking/vaping products
- Integration with multiple cryptocurrencies
- Social sharing of milestones

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [tahirahmadin](https://github.com/tahirahmadin).

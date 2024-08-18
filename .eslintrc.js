module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended', // Add this line
  ],
  plugins: ['prettier'], // Add this line
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true, // Ensure this is set to true
      },
    ],
  },
};

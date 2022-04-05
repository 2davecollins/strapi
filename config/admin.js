module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '91541010196a0a98bef3ed86f0e804b6'),
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '569d3649b6723fd675c042b8af15044f'),
  },
});

const { watchParcel } = require('./parcel-watch');

module.exports = async () => {
  await Promise.all([watchParcel()]);
};

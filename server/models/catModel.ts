import * as mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
  pays0: String,
  pays1: String,
  pays2: String,
  pays3: String,
  pays4: String,
  pays5: String,

  teams1F: String,
  teams1S: String,
  teams1R: String,
  teams1C: String,
  teams1A: String,
  teams1P: String,

  teams2F: String,
  teams2S: String,
  teams2R: String,
  teams2C: String,
  teams2A: String,
  teams2P: String,

  persons1F: Array,
  persons1S: Array,
  persons1R: Array,
  persons1C: Array,
  persons1A: Array,
  persons1P: Array,

  persons2R: Array,
  persons2A: Array,
  persons2F: Array,
  persons2S: Array,
  persons2P: Array,
  persons2C: Array,
  
});

const catModel = mongoose.model('cat', catSchema);

export default catModel;

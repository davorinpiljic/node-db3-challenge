const db = require("../data/dbConfig.js");

module.exports = { find, findById, findSteps, add, update, remove };

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db("steps")
    .where("steps.scheme_id", id)
    .join("schemes", "schemes.id", "=", "steps.scheme_id")
    .select(
      "schemes.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .orderBy("steps.step_number");
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

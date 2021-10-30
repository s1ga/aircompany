const PassengerPlane = require('./planes/PassengerPlane');
const MilitaryPlane = require('./planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const ExperimentalPlane = require('./planes/ExperimentalPlane');

class Airport {
  static printPlanes(planes) {
    return JSON.stringify(planes);
  }

  constructor(planes) {
    this.planes = planes;
  }

  getPlanes() {
    return this.planes;
  }

  getPassengerPlanes() {
    return this.planes.filter(plane => plane instanceof PassengerPlane);
  }

  getMilitaryPlanes() {
    return this.planes.filter(plane => plane instanceof MilitaryPlane);
  }

  getExperimentalPlanes() {
    return this.planes.filter(plane => plane instanceof ExperimentalPlane);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    return Math.max(...this.getPassengerPlanes().map(plane => plane.passengersCapacity));
  }

  getTransportMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(militaryPlane => militaryPlane.militaryType === MilitaryType.TYPE_TRANSPORT);
  }

  getBomberMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(militaryPlane => militaryPlane.militaryType === MilitaryType.TYPE_BOMBER);
  }

  sortByMaxDistance() {
    this.planes.sort((firstPlane, secondPlane) => firstPlane.getMaxFlightDistance() - secondPlane.getMaxFlightDistance());
    return this;
  }

  sortByMaxSpeed() {
    this.planes.sort((firstPlane, secondPlane) => firstPlane.getMaxSpeed() - secondPlane.getMaxSpeed());
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort((firstPlane, secondPlane) => firstPlane.getMaxLoadCapacity() - secondPlane.getMaxLoadCapacity());
    return this;
  }
}

module.exports = Airport;

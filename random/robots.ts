/* We have a bin of robot parts in a factory. Each part goes to a robot with a specific, unique name. Each part will be described by a string, with the name of the robot and the part name separated by an underscore, like "Rocket_arm".
 *
 * All robots are made of the same types of parts, and we have a string of all of the parts required to form a complete robot. Given a list of available parts, return the collection of robot names for which we can build at least one complete robot.
 */

const allParts = [
  'Rocket_claw',
  'Rocket_sensors',
  'Dustie_case',
  'Rust_sensors',
  'Bolt_sensors',
  'Rocket_case',
  'Rust_case',
  'Bolt_speaker',
  'Rocket_wheels',
  'Rocket_speaker',
  'Dustie_case',
  'Dustie_arms',
  'Rust_claw',
  'Dustie_case',
  'Dustie_speaker',
  'Bolt_case',
  'Bolt_wheels',
  'Rust_legs',
  'Bolt_sensors',
];

const requiredParts1 = 'sensors,case,speaker,wheels';
const requiredParts2 = 'sensors,case,speaker,wheels,claw';
// Expected output in any order:
// getRobots(allParts, requiredParts1) -> ['Bolt', 'Rocket']
// getRobots(allParts, requiredParts2) -> ['Rocket']

interface Robots {
  robot?: RobotDetails;
}
interface RobotDetails {
  uniqueParts: number;
  part?: number;
}

const getRobots = (allParts: string[], requiredParts: string[]): string[] => {
  const results: string[] = [];
  const robots: Robots = {};
  allParts.forEach((el) => {
    const [robot, part] = el.split('_');
    if (!robots[robot]) robots[robot] = { uniqueParts: 1 };
    if (!robots[robot][part]) robots[robot][part] = 0;
    robots[robot][part]++;
  });
  console.log(robots);
  return results;
};

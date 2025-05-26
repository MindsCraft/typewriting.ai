declare module 'gcode-parser' {
  interface GCodeWord {
    type: string;
    value: number;
  }

  interface GCodeResult {
    words: GCodeWord[];
  }

  export function parseGcode(gcode: string): GCodeResult;
}

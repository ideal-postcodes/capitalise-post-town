const { capitalisePostTown } = require("capitalise-post-town");

// Simple Case
capitalisePostTown("DRYBROOK") // => Drybrook

// Hypenated
capitalisePostTown("HENLEY-IN-ARDEN") // => Henley-in-Arden

// Minor uncapitalised words
capitalisePostTown("WALTON on THE naze") // => Walton on the Naze

// Exception
capitalisePostTown("BO'NESS") // => Bo'Ness

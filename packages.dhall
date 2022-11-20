let upstream =
      https://github.com/purescript/package-sets/releases/download/psc-0.15.4-20221107/packages.dhall
        sha256:cd0c29e8a69cf70b714ce3ee91c57c02b3d20a1118e35dd8405f33aa80177849

let overrides = {=}

let additions = {=}

in  upstream // overrides // additions

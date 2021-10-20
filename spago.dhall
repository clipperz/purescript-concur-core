{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "concur-core"
, dependencies =
  [ "aff"
  , "aff-bus"
  , "arrays"
  , "avar"
  , "console"
  , "foldable-traversable"
  , "free"
  , "profunctor-lenses"
  , "tailrec"
  , "control"
  , "datetime"
  , "effect"
  , "either"
  , "exceptions"
  , "identity"
  , "lazy"
  , "maybe"
  , "newtype"
  , "parallel"
  , "prelude"
  , "transformers"
  , "tuples"
  ]
, license = "MIT"
, repository = "https://github.com/clipperz/purescript-concur-core"
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
}

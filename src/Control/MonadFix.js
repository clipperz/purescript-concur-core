/* global exports, require */
"use strict";

//////////////////////////////////////////////////////////////////
// ATTRIBUTION
// monad-fix package is not on pursuit, so copied this file from -
// https://github.com/zrho/purescript-monad-fix/
//////////////////////////////////////////////////////////////////

// module Control.MonadFix

var message = "Control.MonadFix: Premature access to result of fixpoint computation."

// fixEffect :: forall eff a. ((Unit -> a) -> Eff eff a) -> Eff eff a
export function fixEffect(f) {
	return function() {
		var result = null;
		var ready = false;

		result = f(function(u) {
			if (!ready) throw new Error(message);
			return result;
		})();

		ready = true;
		return result;
	}
}

// fixPure :: forall a. ((Unit -> a) -> a) -> a
export function fixPure(f) {
	return fixEffect(function(a) { return function () { return f(a); }})();
}

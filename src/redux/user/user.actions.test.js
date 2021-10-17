const user_actions = require("./user.actions")
// @ponicode
describe("user_actions.googleSignInStart", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.googleSignInStart()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user_actions.signInSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.signInSuccess("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            user_actions.signInSuccess(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            user_actions.signInSuccess("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            user_actions.signInSuccess("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            user_actions.signInSuccess("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            user_actions.signInSuccess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user_actions.signInFailure", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.signInFailure("error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            user_actions.signInFailure("Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            user_actions.signInFailure("error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            user_actions.signInFailure("ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            user_actions.signInFailure("too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            user_actions.signInFailure(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user_actions.emailSignInStart", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.emailSignInStart("bed-free@tutanota.de")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            user_actions.emailSignInStart("something.example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            user_actions.emailSignInStart("user@host:300")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            user_actions.emailSignInStart("email@Google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            user_actions.emailSignInStart("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            user_actions.emailSignInStart(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user_actions.signOutStart", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.signOutStart()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user_actions.signOutSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.signOutSuccess()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user_actions.signOutFailure", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.signOutFailure("Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            user_actions.signOutFailure("error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            user_actions.signOutFailure("multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            user_actions.signOutFailure("ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            user_actions.signOutFailure("too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            user_actions.signOutFailure(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user_actions.signUpStart", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.signUpStart(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            user_actions.signUpStart(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            user_actions.signUpStart(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user_actions.signUpSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.signUpSuccess({ user: "username", additionalData: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            user_actions.signUpSuccess({ user: "user123", additionalData: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            user_actions.signUpSuccess({ user: "user_name", additionalData: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            user_actions.signUpSuccess({ user: 123, additionalData: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            user_actions.signUpSuccess({ user: "user-name", additionalData: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            user_actions.signUpSuccess({ user: undefined, additionalData: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user_actions.signUpFailure", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.signUpFailure("error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            user_actions.signUpFailure("multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            user_actions.signUpFailure("ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            user_actions.signUpFailure("Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            user_actions.signUpFailure("error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            user_actions.signUpFailure(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user_actions.checkUserSession", () => {
    test("0", () => {
        let callFunction = () => {
            user_actions.checkUserSession()
        }
    
        expect(callFunction).not.toThrow()
    })
})

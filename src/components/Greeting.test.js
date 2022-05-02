// replicate App.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// Group test by test suites, describe acts as a test suite/group
    // 1st param is the description, 2nd param is an anonymous function to hold individual tests
describe("Greeting component", () => {
// no need to import test, describe test in quotes -> Testing to see if Greeting.js renders "Hello World" 
        // 1st param is description of test
        //  2nd param is an anonymous function which will contain the actual testing code 

        // 3 A's of Testing: 
            // Arrange: set up the test data, test conditions and test environment
            // Act: Run logic that should be tested(ex: execute a function)
            // Assert: Compare execution results with expected results
            test('render Hello World as a text', () => {
                // Arrange
                render(<Greeting />);
            
                // Act -> he said basically nothing, but the explanation is above in the 3 A's
            
                // Assert -> there are get, find(return promise), and query functions from the screen import -> screen acts as a virtual DOM
                    // regex: /learn react/i is more flexible while specific string is less flexible
                        // if no element from this, returns error -> failed test because looks for exact match and ! makes it not an exact match
                            // can either add another param of exact: false in object to screen.getByText() or change 1st param of screen.getByText("Hello World!") 
                                // test passes with exact:false passed in
                const helloWorldElement = screen.getByText("Hello World", {exact: false});
                // expect is a global function, not a global import | toBeInDocument(); 
                    // can also check for opposites by .not.toBeInDocument();, may have to user query above for this
                expect(helloWorldElement).toBeInTheDocument();
            });

        // Test User interaction and state(by useState() hook in Greeting.js)
            // 1st test is to test whether or not if on the initialState if correct text is shown
        test('renders Its good to see you! if BTN was NOT clicked', () => {
            // Same Arrange as before
            render(<Greeting/>);

            //Act -> same as before with no need to call a function

            // Assert -> similar logic to before
            const outputElement = screen.getByText("good to see you", {exact: false});
            // expect is a global function, not a global import | toBeInDocument(); 
                // can also check for opposites by .not.toBeInDocument();, may have to user query above for this
            expect(outputElement).toBeInTheDocument();
        });

        //2nd test is to test whether or not if btn clicked changes state and if on changedState new text is shown
        test('renders Changed! if BTN was clicked', () => {

            // Arrange same as before
            render(<Greeting/>);

            // Act, 
                // 1st time we will use this step, track BTN click, How??? -> import userEvent from "@testing-library/user-event"
                    // userEvent stores typical click events( click, dblclick, hover, etc... ) -> click has multiple params, only need 1st
                        //pass in getByText element or getByRole of button as what you pass into 1st param. getByRole may not work if more than 1 btn
            const buttonElement = screen.getByRole('button');
            userEvent.click(buttonElement)

            //Assert, use getByText(), actual assertion by expect()
            const outputElement = screen.getByText('Changed', {exact: false});
            expect(outputElement).toBeInTheDocument();
        });

        //3rd test is to test whether or not if btn clicked changes state and if on changedState new text is shown
        test('doesnt render good to see you if BTN was clicked', () => {

        // Arrange same as before
        render(<Greeting/>);
        
        // Act, 
            const buttonElement = screen.getByRole('button');
            userEvent.click(buttonElement)
        
        //Assert, can use .screenByText() and .not.toBeInDocument -> this results in an error and failed test
            // instead use .queryByText() to replace error and instead use .toBeNull() as no error will result and it result in successful test
                // only successful if Greeting.js contains       {changedText && <p>It's good to see you!</p> }{!changedText && <p>Changed!</p>}
                // won't work if {changedText ? <p>It's good to see you!</p> : <p>Changed!</p>}
            const outputElement = screen.queryByText('good to see you', {exact: false});
            expect(outputElement).not.toBeInTheDocument();
        });
});


import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    // 1st test is a test to check if the posts rendered correctly
    test("renders posts if request succeeds", async () => {
       /* // Arrange -> explanation on Greeting.js
        render(<Async/>);

        // Act -> No Act Step as this acts on virtual DOM, only realistically used if user does something that would change the page such as btn click

        // Assert -> look at his HTML roles link, we have multiple items so use getAllByRole() not just getByRole()
        // replaced const listItemElements = screen.getAllByRole('listitem');
        const listItemElements = await screen.findAllByRole('listitem', {}, {});
        // make sure listItemElements to not have length of 0 or not empty
        expect(listItemElements).not.toHaveLength(0);

        // This Test initially fails because on the initial render cycle there is no length in the posts array/state
            // Then, the async/fetch is done and data is populated into the array or posts state.
                // instead use .findAllByRole() which returns a promise. 1st param is listitem string, 2nd param is exact: true/false in  {},
                    // 3rd param you can add some features including timeout.
        // Don't have to use params though, all you have to do is use async/await keywords, making test function asynchrounous
            // and awaiting .findAllByRole() promise. */
        


        // Not Ideal to use this or even run tests for fetch requests because they can unneccessarily do things such as POST data to a DB.
            // you don't want tests doing things that only your development should be able to do. Either don't send requests or
                // send requests to some fake server.
        // Don't test whether fetch successfully sends request, instead, see if component behaves correctly depending on outcomes of request. 
            // use dummy function/mock instead of fetch. Shown Below:
        
        // jest.fn() creates dummy function for you
            // .mockResolvedValueOnce() allows us to set a value this fetch function should resolve to when its being called
                // this value is from the response.json() from Async.js, replicate .json() from Async.js which returns a new promise, so create anonymous
                    // async function below: data param in Async.js is the returned array of li items that is mapped, so replicate with [] below:
                        // replicate a minor successful posts array with data
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}],
        });


        // Arrange
        render(<Async/>);

        // Assert 
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});
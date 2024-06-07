import renderer from 'react-test-renderer'
import { Home } from '../pages/Home';

test("demo", () => {
    expect(1 + 1).toBe(2);
    expect(1 + 1).not.toBe(3);
})

describe("Home component", () => {
    it('loads as a page', () => {
        const component = renderer.create(
            <Home />
        )

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})
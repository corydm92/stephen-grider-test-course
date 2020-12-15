import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

/**
 * @enzyme - Package built by AirBnB that gives us additional test utility methods
 */

/**
 * @EnzymeAPI
 * @Static - Render the given component and return plain HTML (no ability to interact with that HTML that is generated, no onClicks, onChange etc.)
 * @Shallow - Render *just* the given component and none of its *react* children (used when we want to test a component in isolation, and not when we want to test components underneath it)
 * @FullDOM - Render the component and all of its chldren + let us modify it afterwards (simulates click events, entering text, interactions)
 */

Enzyme.configure({ adapter: new Adapter() });

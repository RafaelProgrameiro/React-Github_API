import { Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import styled from 'styled-components';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 8px;
`;

export const WrapperTablist = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTablist.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    margin: 2px;

    &.is-selected{
        background-color: #ccc;
    }
    
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`

      
    padding: 8px;
    margin-top: 5px;
    display: none;
    
    &.is-selected {
        display: block;
    }

`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 8px;

`;
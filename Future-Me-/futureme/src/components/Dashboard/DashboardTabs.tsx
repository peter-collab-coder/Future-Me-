import React, { useState } from 'react';
import { Tabs, Tab } from '@headlessui/react';
import { Target, Trophy, Calendar, Star } from 'lucide-react';
import DashboardSection from './DashboardSection';
import GoalsSection from './GoalsSection';
import ProgressSection from './ProgressSection';
import RewardsSection from './RewardsSection';

const DashboardTabs: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="p-4">
            <Tabs selectedIndex={selectedTab} onSelect={setSelectedTab}>
                <Tabs.List className="flex space-x-4">
                    <Tab className="tab" selectedClassName="tab-selected">
                        <Target className="tab-icon" /> Dashboard
                    </Tab>
                    <Tab className="tab" selectedClassName="tab-selected">
                        <Trophy className="tab-icon" /> Goals
                    </Tab>
                    <Tab className="tab" selectedClassName="tab-selected">
                        <Calendar className="tab-icon" /> Progress
                    </Tab>
                    <Tab className="tab" selectedClassName="tab-selected">
                        <Star className="tab-icon" /> Rewards
                    </Tab>
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel>
                        <DashboardSection />
                    </Tabs.Panel>
                    <Tabs.Panel>
                        <GoalsSection />
                    </Tabs.Panel>
                    <Tabs.Panel>
                        <ProgressSection />
                    </Tabs.Panel>
                    <Tabs.Panel>
                        <RewardsSection />
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs>
        </div>
    );
};

export default DashboardTabs;
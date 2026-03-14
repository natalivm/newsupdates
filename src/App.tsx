import React, { useState, useCallback } from 'react';
import { Department, Employee } from './data/types';
import HomeScreen from './components/HomeScreen';
import AllEmployees from './components/AllEmployees';
import ProfilePage from './components/ProfilePage';
import BottomNav, { Tab } from './components/BottomNav';

const App: React.FC = () => {
  const [tab, setTab] = useState<Tab>('home');
  const [selectedDept, setSelectedDept] = useState<Department | 'all'>('all');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [prevTab, setPrevTab] = useState<Tab>('home');

  const handleNavigateDepartment = useCallback((dept: Department) => {
    setSelectedDept(dept);
    setTab('employees');
  }, []);

  const handleSelectEmployee = useCallback((employee: Employee) => {
    setPrevTab(tab === 'home' || tab === 'employees' ? tab : 'home');
    setSelectedEmployee(employee);
    setTab('profile');
  }, [tab]);

  const handleBackFromProfile = useCallback(() => {
    setSelectedEmployee(null);
    setTab(prevTab);
  }, [prevTab]);

  const handleTabChange = useCallback((newTab: Tab) => {
    if (newTab === 'home') {
      setSelectedDept('all');
      setSelectedEmployee(null);
    }
    if (newTab === 'employees') {
      setSelectedEmployee(null);
    }
    setTab(newTab);
  }, []);

  return (
    <div className="app">
      {tab === 'home' && (
        <HomeScreen onNavigateDepartment={handleNavigateDepartment} onSelectEmployee={handleSelectEmployee} />
      )}
      {tab === 'employees' && (
        <AllEmployees initialDepartment={selectedDept} onSelectEmployee={handleSelectEmployee} />
      )}
      {tab === 'profile' && selectedEmployee && (
        <ProfilePage employee={selectedEmployee} onBack={handleBackFromProfile} />
      )}
      {tab !== 'profile' && (
        <BottomNav active={tab} onChange={handleTabChange} />
      )}
    </div>
  );
};

export default App;

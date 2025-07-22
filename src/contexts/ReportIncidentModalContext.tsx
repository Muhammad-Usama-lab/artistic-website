"use client";

import React, { createContext, useContext } from 'react';

interface ReportIncidentModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ReportIncidentModalContext = createContext<ReportIncidentModalContextType | undefined>(undefined);

export const useReportIncidentModal = () => {
  const context = useContext(ReportIncidentModalContext);
  if (!context) {
    throw new Error('useReportIncidentModal must be used within a ReportIncidentModalProvider');
  }
  return context;
};

export const ReportIncidentModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ReportIncidentModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ReportIncidentModalContext.Provider>
  );
};
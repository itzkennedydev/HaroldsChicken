import { useEffect } from 'react';
import { MenuItem } from '../types';

interface UseKeyboardShortcutsProps {
  menuItems: MenuItem[];
  isMenuOpen: boolean;
  onMenuClose: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement>;
}

export function useKeyboardShortcuts({
  menuItems,
  isMenuOpen,
  onMenuClose,
  menuButtonRef,
}: UseKeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore shortcuts in input fields
      if (e.target instanceof HTMLElement && 
          (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

      // ESC key closes mobile menu
      if (e.key === 'Escape' && isMenuOpen) {
        onMenuClose();
        menuButtonRef.current?.focus();
        return;
      }

      // Keyboard shortcuts for navigation
      if (e.altKey) {
        const menuItem = menuItems.find(item => item.shortcut === e.key.toLowerCase());
        if (menuItem) {
          e.preventDefault();
          if (menuItem.isExternal) {
            window.open(menuItem.href, '_blank', 'noopener,noreferrer');
          } else {
            window.location.href = menuItem.href;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuItems, isMenuOpen, onMenuClose, menuButtonRef]);
} 
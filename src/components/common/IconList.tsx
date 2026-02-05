import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from '@/styles/common/IconList.module.css';

interface IconListProps {
  items: string[];
  icon: LucideIcon;
  iconClassName?: string;
}

const IconList = ({ items, icon: Icon, iconClassName }: IconListProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className={styles.item}>
          <Icon className={cn(styles.icon, iconClassName)} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default IconList;

import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IListItem {
  children: React.ReactNode;
}

const Title = ({ children }: { children: string | React.ReactNode }) => {
  return <h4 className="font-semibold text-sm">{children}</h4>;
};

const Icon = ({ icon }: { icon: IconDefinition }) => {
  return (
    <div className="p-4">
      <FontAwesomeIcon icon={icon} height="20" />
    </div>
  );
};

const Text = ({ children }: { children: string | React.ReactNode }) => {
  return <li className="">{children}</li>;
};

const SubText = ({ children }: { children: string | React.ReactNode }) => {
  return <li className="text-xs">{children}</li>;
};

const ListItem = ({ children }: IListItem): JSX.Element => {
  return <div className="flex space-x-2 py-2">{children}</div>;
};

ListItem.Title = Title;
ListItem.Icon = Icon;
ListItem.Text = Text;
ListItem.SubText = SubText;

export default ListItem;

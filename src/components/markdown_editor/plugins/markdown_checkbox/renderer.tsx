/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useContext } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { EuiCheckbox } from '../../../form/checkbox';
import { EuiMarkdownContext } from '../../markdown_context';
import { useGeneratedHtmlId } from '../../../../services/accessibility';
import { EuiMarkdownAstNodePosition } from '../../markdown_types';
import { CheckboxNodeDetails } from './types';

export const CheckboxMarkdownRenderer: FC<PropsWithChildren<
  CheckboxNodeDetails & {
    position: EuiMarkdownAstNodePosition;
  }
>> = ({ position, lead, label, isChecked, children }) => {
  const { replaceNode } = useContext(EuiMarkdownContext);
  return (
    <EuiCheckbox
      id={useGeneratedHtmlId()}
      checked={isChecked}
      label={children}
      onChange={() => {
        replaceNode(position, `${lead}[${isChecked ? ' ' : 'x'}]${label}`);
      }}
    />
  );
};

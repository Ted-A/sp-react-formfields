import { IFieldProps } from './interfaces';

const escapeChars = { lt: '<', gt: '>', quot: '"', apos: '\'', amp: '&' };
export const unescapeHTML = (str) => {
  return str.replace(/\&([^;]+);/g, (entity, entityCode) => {
    let match;

    if (entityCode in escapeChars) {
      return escapeChars[entityCode];
    // tslint:disable-next-line:no-conditional-assignment
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
      return String.fromCharCode(parseInt(match[1], 16));
    // tslint:disable-next-line:no-conditional-assignment
    } else if (match = entityCode.match(/^#(\d+)$/)) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
};

export const handleError = (msg: string) => {
  console.error(msg);
};

export const getFieldPropsByInternalName = (allProps: IFieldProps[], internalName: string): IFieldProps => {
  // console.log(allProps);
  if (!allProps || allProps.length < 1 || !internalName) {
    return null;
  }
  let filtered = allProps.filter(f => f.InternalName === internalName);
  if (filtered && filtered.length > 0) {
    return filtered[0];
  }

  return null;
};

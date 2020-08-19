import { File } from '../../graphql-types';

export const filterMdxFiles = (
  samplingFiles: Array<{ node: Pick<File, 'name' | 'absolutePath'> }>,
  filesToBeFiltered: any[]
) => {
  const filesWithNameAttached = filesToBeFiltered.map((file: any) => {
    const samplingFile = samplingFiles.find(
      ({ node }) => node.absolutePath === file.node.fileAbsolutePath
    );
    if (samplingFile) return { ...file, name: samplingFile.node.name };
    return file;
  });
  return filesWithNameAttached.filter((file: any) => Boolean(file.name));
};

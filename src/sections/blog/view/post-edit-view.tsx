'use client';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useGetPost } from 'src/api/blog';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import PostNewEditForm from '../post-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function PostEditView({ id }: Props) {
  const settings = useSettingsContext();

  const { post: currentPost } = useGetPost(id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="編集"
        links={[
          {
            name: 'UTTC',
            href: paths.dashboard.root,
          },
          {
            name: 'コンテンツ',
            href: paths.dashboard.post.root,
          },
          {
            name: currentPost?.title,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <PostNewEditForm currentPost={currentPost} />
    </Container>
  );
}

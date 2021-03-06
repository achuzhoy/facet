export const VERSION = process.env.REACT_APP_VERSION;
export const GIT_SHA = process.env.REACT_APP_GIT_SHA;
export const IMAGE_REPO = 'quay.io/ocpmetal/ocp-metal-ui';

export const SERVICE_LABELS: { [key in string]: string } = {
  assistedInstaller: 'Assisted Installer',
  assistedInstallerController: 'Assisted Installer Controller',
  assistedInstallerService: 'Assisted Installer Service',
  discoveryAgent: 'Discovery Agent',
  ignitionManifestsAndKubeconfigGenerate: 'Ignition Manifests and Kubeconfig Generate',
  imageBuilder: 'Image Builder',
};

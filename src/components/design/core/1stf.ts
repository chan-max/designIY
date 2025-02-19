import { ModelController } from "./controller";
import { canvasBgColor, currentOperatingBaseModelInfo, isDarkMode, canvasBgOpacity } from '../store';
import Utils from '@/common/utils';

export const _1stfExporterMixin = (modelController: ModelController) => {

  modelController.exportTo1stf = async () => {

    // const decals = modelController.decalControllers.map((decal: any) => {
    //   return decal.export()
    // }).filter(Boolean);

    const decals = await Promise.all(
      modelController.decalControllers.map((decal) => decal.export())
    )

    return {
      baseModelId: currentOperatingBaseModelInfo.value.id,
      decals,
      state: Utils.clone(modelController.state),
      isDarkMode: isDarkMode.value,
      canvasBgColor: canvasBgColor.value,
      canvasBgOpacity: canvasBgOpacity.value,
      camera: {
        position: {
          x: modelController.camera.position.x,
          y: modelController.camera.position.y,
          z: modelController.camera.position.z,
        },
        rotation: {
          x: modelController.camera.rotation.x,
          y: modelController.camera.rotation.y,
          z: modelController.camera.rotation.z,
        },
        fov: modelController.camera.fov,
        // 根据试图尺寸自适应
        aspect: modelController.camera.aspect,
        near: modelController.camera.near,
        far: modelController.camera.far
      }
    };
  };
};

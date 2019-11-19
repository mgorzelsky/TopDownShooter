export function DetectCollision(projectile, gameObject) {
  let bottomOfProjectile = projectile.position.y + projectile.size;
  let topOfProjectile = projectile.position.y;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;

  if (
    bottomOfProjectile >= topOfObject &&
    topOfProjectile <= bottomOfObject &&
    projectile.position.x >= leftSideOfObject &&
    projectile.position.x + projectile.size <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
